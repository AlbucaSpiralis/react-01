import React, { useState } from "react";
import axios from "axios";
import "./InputForm.css";

interface InputFormProps {
  dumpType: string;
  fields: string[];
  types: string[];
}

const InputForm: React.FC<InputFormProps> = ({ dumpType, fields, types }) => {
  const [formState, setFormState] = useState(
    Object.fromEntries(fields.map((field, i) => [field, ""]))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);

    // Pass the form data to the triggerJenkinsJob function
    await triggerJenkinsJob(formState);
  };

  const triggerJenkinsJob = async (formState: { [key: string]: string }) => {
    const jobName = "auto-common";
    const jenkinsUrl = "http://localhost:3446";
    const username = "remoteuser";
    const token = "11a57977fb3f6f03d03eb05f74de048c4e";

    const url = `${jenkinsUrl}/job/${jobName}/build?token=${token}`;

    const formData = new URLSearchParams(formState).toString();

    try {
      const response = await axios({
        method: "post",
        url: url,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(username + ":" + token),
        },
        data: {
          parameter: formData,
        },
      });

      console.info(formData);

      if (response.status === 201) {
        alert("Job triggered successfully");
      } else {
        alert("Failed to trigger job");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{dumpType}</h2>
      {fields.map((field, i) => (
        <label key={i}>
          {field}:
          <input
            type={types[i]}
            name={field}
            value={formState[field]}
            onChange={handleChange}
          />
        </label>
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default InputForm;

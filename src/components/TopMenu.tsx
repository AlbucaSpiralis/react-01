import React from "react";
import "./TopMenu.css";
import { Link } from "react-router-dom";

interface MenuItem {
  name: string;
  link: string;
}

interface TopMenuProps {
  menuItems: MenuItem[];
}

// interface TopMenuState {
//   activeItem: string;
// }

class TopMenu extends React.Component<TopMenuProps> {
  //   constructor(props: TopMenuProps) {
  //     super(props);
  //     this.state = {
  //       activeItem: this.props.menuItems[0].name,
  //     };
  //   }

  //   handleItemClick = (name: string) => {
  //     this.setState({ activeItem: name });
  //   };

  render() {
    const { menuItems } = this.props;
    //const { activeItem } = this.state;

    return (
      <div className="topMenu">
        {menuItems.map((item) => (
          <div key={item.name} className="menuItem">
            <Link to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default TopMenu;

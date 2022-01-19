import { Component } from "react";
import MenuItem from "../menu-item/menu-item";
import { sections } from "./directory.data";
import "./directory.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections,
    };
  }

  render() {
    return <div className='directory-menu'>
      {
        this.state.sections.map(section =>
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
            subtitle="SHOP NOW"
          />
        )
      }
    </div>
  }
};

export default Directory;
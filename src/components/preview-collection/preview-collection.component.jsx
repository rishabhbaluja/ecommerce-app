import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

class PreviewCollection extends React.Component {
  render() {
    const { title, items } = this.props;
    return (
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>

        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...propsItem }) => {
              return <CollectionItem key={id} {...propsItem}></CollectionItem>;
            })}
        </div>
      </div>
    );
  }
}

export default PreviewCollection;

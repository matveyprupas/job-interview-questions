import React from "react";
import "./ItemsDescription.css";

const ItemsDescription: React.FunctionComponent = () => {
  return (
    <div className="itemsDescription">
      <p>Create a form with the following fields</p>
      <ul>
        <li>title</li>
        <li>price</li>
        <li>description</li>
        <li>image</li>
        <li>
          category: select with the following options
          <ul>
            <li>Clothing</li>
            <li>Jewelery</li>
            <li>Electronics</li>
          </ul>
        </li>
      </ul>
      <p>
        Submit it to <i>https://reqres.in/api/users</i> with POST method.
      </p>
      <p>
        In case of success show the following message `Product has been added`.
        In case of error show corresponding error message
      </p>
      <p>
        Use the <b>src/Items/Items.tsx</b> Component. It's displayed on the
        right side.
      </p>
    </div>
  );
};

export default ItemsDescription;

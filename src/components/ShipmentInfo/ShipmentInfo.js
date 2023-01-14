import React from "react";

const ShipmentInfo = () => {
  return (
    <div>
      <h3>Edit Delivery Details</h3>
      <hr />
      <form>
        <div class="mb-3">
          <input
            type="text"
            class="form-control p-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value="Deliver to door"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control p-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value="107 Rd No 8"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control p-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Flat. suite or floor"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control p-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Business Name"
          />
        </div>
        <div class="mb-3">
          <textarea
            type="text"
            class="form-control p-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Add delivery instruction"
          />
        </div>

        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary p-3">
            Save & continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipmentInfo;

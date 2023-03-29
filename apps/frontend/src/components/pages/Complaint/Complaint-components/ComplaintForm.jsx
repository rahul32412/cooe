import "./ComplaintForm.css";

const ComplaintForm = ({ popState, closePopup }) => {
  return (
    <div className="complaintForm-container">
      <form
        id="fs-frm"
        name="complaint-form"
      >
        <fieldset id="fs-frm-inputs">
          <label for="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />
          <label for="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
          />
          <label for="orderId">Order Id</label>
          <input
            type="all"
            name="_order"
            id="orderId"
            placeholder="#tufjbhailuffkj89b567_022"
            required=""
          />
          <label for="phone">Mobile Number (Optional)</label>
          <input
            type="telephone"
            name="telephone"
            id="telephone"
            placeholder="(+91) 8494558187"
          />
          <label for="complaint">Complaint</label>
          <textarea
            rows="6"
            name="complaint"
            id="complaint"
            placeholder="Let us know your Concern."
            required=""
          ></textarea>
        </fieldset>
        <input type="submit" value="File Complaint" onClick={closePopup} />
      </form>
    </div>
  );
};

export default ComplaintForm;

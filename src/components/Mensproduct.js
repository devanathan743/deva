import "../components/menus.css";
import tshirt from "../components/aasets/tshirt.webp";
import jeans from "../components/aasets/Jeans.webp";
import shirt from "../components/aasets/shirt.webp";

function Mensproduct() {
  return (
    <>
      <p style={{ fontSize: "40px", color: "green", paddingLeft: "480px" }}>
        MENS PRODUCTS
      </p>

      <div className="mens-prodect">
        <div className="Tshirt">
          <img
            src={tshirt}
            alt="tshirt"
            style={{ height: "300px", width: "400px", paddingLeft: "10px" }}
          />
          <h3 style={{ paddingLeft: "20px" }}>
            <p>Tshirt</p>
          </h3>
          <br />
          <h3 style={{ color: "black", paddingLeft: "20px" }}>₹499 onwards</h3>
          <br />
          <button
            style={{
              color: "white",
              height: "35px",
              width: "70px",
              backgroundColor: "rgb(35, 187, 117)",
              borderRadius: "12px",
              marginLeft: "20px"
            }}
          >
            3.7{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              ml="4"
              iconsize="10"
              class="sc-csDkEv kOMlUf"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="19.08" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
          <br />
          <br />
          <h4 style={{ color: "black", paddingLeft: "20px" }}>Free Delivery</h4>
        </div>
        <div className="Jeans">
          <img
            src={jeans}
            alt="tshirt"
            style={{ height: "300px", width: "400px", paddingLeft: "10px" }}
          />
          <h3 style={{ paddingLeft: "20px" }}>
            <p>Jeans</p>
          </h3>
          <br />
          <h3 style={{ color: "black", paddingLeft: "20px" }}>₹599 onwards</h3>
          <br />
          <button
            style={{
              color: "white",
              height: "35px",
              width: "70px",
              backgroundColor: "rgb(35, 187, 117)",
              borderRadius: "12px",
              marginLeft: "20px"
            }}
          >
            4.2{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              ml="4"
              iconsize="10"
              class="sc-csDkEv kOMlUf"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="19.08" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
          <br />
          <br />
          <h4 style={{ color: "black", paddingLeft: "20px" }}>Free Delivery</h4>
        </div>
        <div className="shirt">
          <img
            src={shirt}
            alt="shirt"
            style={{ height: "300px", width: "400px", paddingLeft: "10px" }}
          />
          <h3 style={{ paddingLeft: "20px" }}>
            <p>Shirt</p>
          </h3>
          <br />
          <h3 style={{ color: "black", paddingLeft: "20px" }}>₹359 onwards</h3>
          <br />
          <button
            style={{
              color: "white",
              height: "35px",
              width: "70px",
              backgroundColor: "rgb(35, 187, 117)",
              borderRadius: "12px",
              marginLeft: "20px"
            }}
          >
            4.0{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              ml="4"
              iconsize="10"
              class="sc-csDkEv kOMlUf"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="19.08" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
          <br />
          <br />
          <h4 style={{ color: "black", paddingLeft: "20px" }}>Free Delivery</h4>
        </div>
      </div>
    </>
  );
}
export default Mensproduct;

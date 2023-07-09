import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
function Menu() {
  return (
    <>
      <div
        className="icon"
        style={{ position: "relative", left: "40px", top: "163px" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1770_1836)">
            <path
              d="M19.7695 18.6698L16.0096 14.9098C17.3296 13.3298 18.1296 11.2999 18.1296 9.07989C18.1296 4.05995 14.0697 0 9.05978 0C4.0599 0 0 4.05995 0 9.07989C0 14.0998 4.0599 18.1598 9.05978 18.1598C11.2897 18.1598 13.3297 17.3498 14.9096 16.0098L18.6695 19.7698C18.9695 20.0698 19.4695 20.0698 19.7695 19.7698C20.0795 19.4698 20.0795 18.9698 19.7695 18.6698ZM9.05978 16.5998C4.91988 16.5998 1.54996 13.2298 1.54996 9.07989C1.54996 4.92994 4.91988 1.55998 9.05978 1.55998C13.1997 1.55998 16.5696 4.92994 16.5696 9.07989C16.5696 13.2298 13.1997 16.5998 9.05978 16.5998Z"
              fill="#8B8BA3"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1770_1836">
              <rect width="19.9995" height="19.9998" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <ul>
        <li>
          <p style={{ fontSize: "30px" }}>Category</p>
        </li>

        <li>
          {" "}
          <input
            type="search"
            placeholder="          search"
            style={{ height: "40px", width: "300px" }}
          />
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          mens analog Watches
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Bangles & Bracelets
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Bathing Soaps
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Bedsheets
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Bike Covers
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Blouses
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Bluetooth Headphones
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Body Lotions & Creams
        </li>

        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Car Covers
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Cups & Mugs
        </li>
        <li>
          <MdOutlineCheckBoxOutlineBlank
            style={{ height: "20px", width: "40px" }}
          />
          Dresses
        </li>
      </ul>
    </>
  );
}
export default Menu;

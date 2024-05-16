import { Typewriter } from "react-simple-typewriter";

const TypeWrite = () => {
    return (
        <div>
            <div className="text-center text-6xl my-6">
        <h1
          style={{
            alignItems: "center",
            paddingTop: "5rem",
            margin: "auto 0",
            fontWeight: "normal",
          }}
        >
          You Can {" "}
          <span style={{ fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Add Your Job", "Delete Your Job", "View Your Jobs", "Edit Your Jobs", "Confirm Your Job"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
        </div>
    );
};

export default TypeWrite;
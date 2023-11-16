import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
  Skeleton,
} from "@mui/material";
import { useSpring, animated, useSpringRef } from "react-spring";
import CustomizedSteppers from "./Stepper";

import AccountCircle from "@mui/icons-material/AccountCircle";
import { AttachMoney } from "@mui/icons-material";

export default function Hustle() {
  const [title, setTitle] = useState({ value: "HairCut Usm", error: "" });
  const [tagline, set_tag_line] = useState({
    value: "Best Haircut in Usm",
    error: "",
  });
  const [type, set_type] = useState({ value: "haircut", error: "" });

  const [step, setStep] = useState(0);
  const [stepper_step, setStepperStep] = useState(1);

  const [word_list, set_word_list] = useState({
    Expertise: [
      "Experienced Stylists",
      "Skilled Barbers",
      "Trendy Hairstyles",
      "Precision Cutting",
      "Advanced Coloring Techniques",
    ],
    Services: [
      "Haircuts",
      "Hairstyling",
      "Hair Coloring",
      "Highlights",
      "Hair Treatments",
      "Shaves",
    ],
    "Unique Selling Points": [
      "Modern and Stylish Salon",
      "Comfortable and Relaxing Atmosphere",
      "Personalized Consultations",
      "Tailored Services for Men and Women",
      "Affordable Prices",
    ],
    Values: [
      "Quality",
      "Professionalism",
      "Customer Satisfaction",
      "Attention to Detail",
      "Reliability",
    ],
  });

  const [selected_expertise, set_selected_expertise] = useState([]);
  const [selected_services, set_selected_services] = useState([
    "Haircuts",
    "Hairstyling",
    "Hair Coloring",
    "Shaves",
  ]);
  const [selected_unique_points, set_selected_unique_points] = useState([]);
  const [selected_values, set_selected_values] = useState([]);
  const [prices, set_prices] = useState({});
  const [description, set_description] = useState("");

  const props_1 = useSpring({
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 300 }, // Adjust the duration as needed
  });
  const props_2 = useSpring({
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 300 }, // Adjust the duration as needed
    delay: 100,
  });
  const props_3 = useSpring({
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 300 }, // Adjust the duration as needed
    delay: 150,
  });
  const props_4 = useSpring({
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 300 }, // Adjust the duration as needed
    delay: 220,
  });

  const [loading, setLoading] = useState(false);

  const transitions = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  const titles = [
    "Create a new Hustle",
    "Please choose your expertise",
    "Please choose the unique services that you provide",
    "Please choose your expertise",
  ];

  const [showLeftPanel, setShowLeftPanel] = React.useState(true);
  const left_anim_ref = useSpringRef();

  const springs_left = useSpring({
    ref: left_anim_ref,
    from: { x: 0, opacity: 1, display: "block" },
  });

  const handleLeftAnim = () => {
    left_anim_ref.start({
      to: {
        x: springs_left.x.get() === -350 ? 0 : -350,
        opacity: 0,
        display: "none",
      },
    });
  };

  const right_anim_ref = useSpringRef();

  const spring_right = useSpring({
    ref: right_anim_ref,
    from: { x: 0 },
  });

  const handleRightAnim = () => {
    right_anim_ref.start({
      to: {
        x: spring_right.x.get() === -350 ? 0 : -350,
        // opacity: 0,
        // display: "none",
      },
      delay: 500,
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          flex: 1,
          flexDirection: "column",
          display: "flex",
          alignItems: "right",
          pl: "50px",
        }}
      >
        {showLeftPanel && (
          <animated.div
            style={{
              ...springs_left,
              flex: 1,
              color: "#333333",
              marginTop: "20em",
              display: "flex",
              flexDirection: "column",
              gap: "4em",
              textAlign: "center",
            }}
          >
            <Typography variant="h4">Some Logo Here</Typography>
            <Typography variant="h4">Some Designs Here</Typography>
            <Typography variant="h4">Some Logo Here</Typography>
          </animated.div>
        )}
        {/* <Box
          sx={{
            mb: 6,
            color: "#333333",
            mt: 20,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            textAlign: "center",
          }}
        >
          <Typography variant="h4">Some Logo Here</Typography>
          <Typography variant="h4">Some Designs Here</Typography>
          <Typography variant="h4">Some Logo Here</Typography>
        </Box> */}
      </Box>

      <animated.div
        style={{
          ...spring_right,
          flex: 3,

          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          // height: "100vh",
          // width: "100vw",
          background: "#F5F5F5",
          flexDirection: "column",
          // maxHeight: "100vh",
          marginTop: "100px",
          overflowX: "hidden",
        }}
      >
        {/* <Box
        sx={{
          flex: 3,

          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          // height: "100vh",
          // width: "100vw",
          background: "#F5F5F5",
          flexDirection: "column",
          // maxHeight: "100vh",
          mt: "100px",
          overflowX: "hidden",
        }}
      > */}
        <Box sx={{ my: 2 }}>
          <CustomizedSteppers current_step={stepper_step} />
        </Box>

        {step === 0 && (
          <First_Step
            setStep={setStep}
            setStepperStep={setStepperStep}
            setTitle={setTitle}
            set_tag_line={set_tag_line}
            set_type={set_type}
            set_word_list={set_word_list}
            tagline={tagline}
            title={title}
            type={type}
            handleRightAnim={handleRightAnim}
            handleLeftAnim={handleLeftAnim}
          />
        )}
        {step === 1 && (
          <Second_Step
            selected_expertise={selected_expertise}
            setStep={setStep}
            set_selected_expertise={set_selected_expertise}
            word_list={word_list}
          />
        )}
        {step === 2 && (
          <SecondSecondStep
            selected_services={selected_services}
            setStep={setStep}
            set_selected_services={set_selected_services}
            word_list={word_list}
          />
        )}
        {step === 3 && (
          <SecondThirdStep
            selected_unique_points={selected_unique_points}
            setStep={setStep}
            set_selected_unique_points={set_selected_unique_points}
            word_list={word_list}
          />
        )}
        {step === 4 && (
          <SecondFourthStep
            selected_values={selected_values}
            set_selected_values={set_selected_values}
            word_list={word_list}
            setStep={setStep}
            setStepperStep={setStepperStep}
          />
        )}
        {step === 5 && (
          <ThirdStep
            prices={prices}
            selected_services={selected_services}
            setStep={setStep}
            set_prices={set_prices}
            setStepperStep={setStepperStep}
          />
        )}
        {step === 6 && (
          <FourthStep
            description={description}
            set_description={set_description}
            selected_services={selected_services}
            tagline={tagline}
            title={title}
            type={type}
          />
        )}
        {/* </Box> */}
      </animated.div>
    </Box>
  );
}

const First_Step = ({
  title,
  setTitle,
  type,
  set_type,
  tagline,
  set_tag_line,
  setStep,
  setStepperStep,
  set_word_list,
  handleRightAnim,
  handleLeftAnim,
}) => {
  const [loading, setLoading] = useState(false);
  async function get_word_list() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://hatchathon-sb3xo7zypa-uc.a.run.app/AI/words/list`,
        {
          // credentials: "include",
          method: "POST",
          body: JSON.stringify({
            business: type.value,
            key: "kookkookiehackers",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw await response.json();

      const re = await response.json();

      console.log(re);
      set_word_list(re);

      setStep(2);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  const props_1 = useSpring({
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 300 }, // Adjust the duration as needed
  });
  const props_2 = useSpring({
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 300 }, // Adjust the duration as needed
    delay: 100,
  });
  const props_3 = useSpring({
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 300 }, // Adjust the duration as needed
    delay: 150,
  });
  const props_4 = useSpring({
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 300 }, // Adjust the duration as needed
    delay: 220,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "500px",
        gap: "30px",
        mt: 7,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="#333333">
          Create a new hustle
        </Typography>
        <Typography variant="h6" color="#333333">
          {" "}
          Create a new hustle subtitle
        </Typography>
      </Box>
      <animated.div style={props_1}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <AccountCircle
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
            fontSize={"large"}
          />
          <TextField
            placeholder="Please enter the title"
            variant="outlined"
            hiddenLabel
            fullWidth
            value={title.value}
            sx={{ color: "#333333" }}
            inputProps={{ style: { height: "30px" } }}
            onChange={(e) => setTitle({ value: e.target.value, error: "" })}
            helperText="Enter the title that best describes the page eg: Best Haircut at USM"
          />
        </Box>
      </animated.div>

      <animated.div style={props_2}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <AccountCircle
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
            fontSize={"large"}
          />
          <TextField
            placeholder="Please your service type"
            variant="outlined"
            hiddenLabel
            fullWidth
            value={type.value}
            sx={{ color: "#333333" }}
            inputProps={{ style: { height: "30px" } }}
            onChange={(e) => set_type({ value: e.target.value, error: "" })}
            helperText="Enter the type that best describes your business eg: Haircut"
          />
        </Box>
      </animated.div>

      <animated.div style={props_3}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <AccountCircle
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
            fontSize={"large"}
          />
          <TextField
            placeholder="Please enter a tagline"
            variant="outlined"
            hiddenLabel
            fullWidth
            value={tagline.value}
            onChange={(e) => set_tag_line({ value: e.target.value, error: "" })}
            sx={{ color: "#333333" }}
            inputProps={{ style: { height: "30px", borderColor: "green" } }}
            helperText="Enter a tagline that best describes your service eg: the sharpest hair cuts in Hattiesburg"
          />
        </Box>
      </animated.div>

      <animated.div style={props_4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: 2,
          }}
        >
          <Button
            variant="outlined"
            disabled={loading}
            sx={{ minWidth: "60%", py: "13px" }}
            onClick={async () => {
              // await get_word_list();
              handleLeftAnim();
              handleRightAnim();
              setTimeout(() => {
                setStepperStep(1);
                setStep(1);
              }, 1000);
            }}
          >
            Next
          </Button>
        </Box>
      </animated.div>
    </Box>
  );
};

const Second_Step = ({
  word_list,
  set_selected_expertise,
  selected_expertise,
  setStep,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "500px",
        gap: "35px",
      }}
    >
      {word_list?.Expertise.map((expertise_vals, i) => {
        const selected = selected_expertise.includes(expertise_vals);
        return (
          <Button
            variant={"outlined"}
            color="primary"
            disableRipple
            key={expertise_vals}
            onClick={() =>
              set_selected_expertise((prev_val) => {
                if (prev_val.includes(expertise_vals)) {
                  // Element exists, remove it
                  prev_val = prev_val.filter((item) => item !== expertise_vals);
                } else {
                  // Element doesn't exist, add it
                  prev_val = [...prev_val, expertise_vals];
                }

                return prev_val;
              })
            }
            fullWidth
            sx={{
              py: 2,
              px: 3,
              background: selected ? "rgba(52, 152, 219, 0.12)" : null,
            }}
          >
            {expertise_vals}
          </Button>
        );
      })}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{ minWidth: "60%", py: "13px" }}
          onClick={() => {
            setStep(2);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

const SecondSecondStep = ({
  word_list,
  set_selected_services,
  selected_services,
  setStep,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "900px",
        gap: "35px",
        flexWrap: "wrap",
        justifyContent: "space-between",
        my: "50px",
      }}
    >
      {word_list?.Services.map((services_vals, i) => {
        const selected = selected_services.includes(services_vals);
        return (
          <Button
            variant={"outlined"}
            key={services_vals}
            color="primary"
            disableRipple
            onClick={() =>
              set_selected_services((prev_val) => {
                if (prev_val.includes(services_vals)) {
                  // Element exists, remove it
                  prev_val = prev_val.filter((item) => item !== services_vals);
                } else {
                  // Element doesn't exist, add it
                  prev_val = [...prev_val, services_vals];
                }

                return prev_val;
              })
            }
            // fullWidth
            sx={{
              py: 2,
              px: 2,
              minWidth: "400px",
              background: selected ? "rgba(52, 152, 219, 0.12)" : null,
              // fontSize: "1em",
            }}
          >
            {services_vals}
          </Button>
        );
      })}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{ minWidth: "400px", py: "13px", maxWidth: "60%" }}
          onClick={() => {
            setStep(3);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

const SecondThirdStep = ({
  word_list,
  set_selected_unique_points,
  selected_unique_points,
  setStep,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "500px",
        gap: "35px",
      }}
    >
      {word_list?.["Unique Selling Points"]?.map((uniqe_points_vals, i) => {
        const selected = selected_unique_points.includes(uniqe_points_vals);
        return (
          <Button
            variant={"outlined"}
            key={uniqe_points_vals}
            color="primary"
            disableRipple
            onClick={() =>
              set_selected_unique_points((prev_val) => {
                if (prev_val.includes(uniqe_points_vals)) {
                  // Element exists, remove it
                  prev_val = prev_val.filter(
                    (item) => item !== uniqe_points_vals
                  );
                } else {
                  // Element doesn't exist, add it
                  prev_val = [...prev_val, uniqe_points_vals];
                }

                return prev_val;
              })
            }
            // fullWidth
            sx={{
              py: 2,
              px: 2,
              minWidth: "400px",
              background: selected ? "rgba(52, 152, 219, 0.12)" : null,
            }}
          >
            {uniqe_points_vals}
          </Button>
        );
      })}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          disableRipple
          sx={{ minWidth: "400px", py: "13px", maxWidth: "60%" }}
          onClick={() => {
            setStep(4);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

const SecondFourthStep = ({
  word_list,
  selected_values,
  set_selected_values,
  setStepperStep,
  setStep,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: "column",
        maxWidth: "900px",
        gap: "35px",
        flexWrap: "wrap",
        justifyContent: "space-between",
        my: "50px",
      }}
    >
      {word_list?.["Values"]?.map((value_vals, i) => {
        const selected = selected_values.includes(value_vals);
        return (
          <Button
            variant={"outlined"}
            key={value_vals}
            color="primary"
            disableRipple
            onClick={() =>
              set_selected_values((prev_val) => {
                if (prev_val.includes(value_vals)) {
                  // Element exists, remove it
                  prev_val = prev_val.filter((item) => item !== value_vals);
                } else {
                  // Element doesn't exist, add it
                  prev_val = [...prev_val, value_vals];
                }

                return prev_val;
              })
            }
            // fullWidth
            sx={{
              py: 2,
              px: 2,
              minWidth: "400px",
              background: selected ? "rgba(52, 152, 219, 0.12)" : null,
            }}
          >
            {value_vals}
          </Button>
        );
      })}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          disableRipple
          sx={{ minWidth: "400px", py: "13px", maxWidth: "60%" }}
          onClick={() => {
            setStepperStep(2);
            setStep(5);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

const ThirdStep = ({
  selected_services,
  set_prices,
  prices,
  setStep,
  setStepperStep,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "500px",
        gap: "35px",
      }}
    >
      {selected_services?.map((selected_services_vals, i) => {
        return (
          <TextField
            key={selected_services_vals}
            placeholder={`Enter price`}
            id="outlined-start-adornment"
            variant="filled"
            hiddenLabel
            onChange={(v) => {
              set_prices((prev) => {
                prev[selected_services_vals] = v.target.value;
                return prev;
              });
            }}
            value={prices[selected_services_vals]}
            sx={{
              my: 1,

              ".MuiFilledInput-root": {
                py: 1,
                backgroundColor: "rgba(52, 152, 219, 0.04)",
                "::before": { borderBottom: 0 },
              },
            }}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ mr: 5 }}>
                  <Typography
                    sx={{ mr: 1 }}
                  >{`${selected_services_vals}   `}</Typography>
                  <AttachMoney />
                </InputAdornment>
              ),
            }}
          />
        );
      })}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          disableRipple
          sx={{ minWidth: "400px", py: "13px", maxWidth: "60%" }}
          onClick={() => {
            setStepperStep(3);
            setStep(6);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

const FourthStep = ({
  description,
  set_description,
  type,
  title,
  tagline,
  selected_services,
  selected_expertise,
  selected_values,
  selected_unique_points,
}) => {
  const [retrieved, set_retrieved] = useState(false);

  async function get_description() {
    try {
      set_retrieved(false);
      const response = await fetch(
        `https://hatchathon-sb3xo7zypa-uc.a.run.app/AI/business/description`,
        {
          // credentials: "include",
          method: "POST",
          body: JSON.stringify({
            business: type.value,
            key: "kookkookiehackers",
            bs_tag: tagline.value,
            bs_name: title?.value,
            bs_type: type?.value,
            kv_pair: {
              Expertise: selected_expertise,
              "Unique Selling Points": selected_unique_points,
              Services: selected_services,
              Values: selected_values,
            },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw await response.json();

      const re = await response.json();

      console.log(re);

      set_description(re?.desc);
    } catch (error) {
      console.log(error);
    }

    set_retrieved(true);
  }

  useEffect(() => {
    const load_desc = async () => {
      await get_description();
    };
    load_desc();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "500px",
        gap: "35px",
      }}
    >
      <Typography variant="h6">Select cover photo and video</Typography>

      <Box>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button component="span">Upload</Button>
        </label>
      </Box>
      <Box>
        <Button>Add another</Button>
      </Box>

      <Typography variant="h6">
        Please wait while we generate a most appealing description for you
      </Typography>

      {retrieved ? (
        <TextField
          placeholder="Enter your hustle description"
          rows={10}
          value={description}
          variant="filled"
          hiddenLabel
          onChange={(v) => {
            set_description(v.target.value);
          }}
          sx={{
            my: 1,

            ".MuiFilledInput-root": {
              py: 1,
              backgroundColor: "rgba(52, 152, 219, 0.04)",
              "::before": { borderColor: "#3498db" },
            },
          }}
          fullWidth
          multiline
        />
      ) : (
        <Skeleton variant="rounded" height={"250px"} />
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{ minWidth: "400px", py: "13px", maxWidth: "60%" }}
          disableRipple
          onClick={() => {
            if (!retrieved) return;
            setStep(6);
          }}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

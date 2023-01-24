import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";
import { Container } from "@mui/material";
import {
  Box,
  Field,
  Label,
  LogoWrapprt,
  Submitbutton,
  Wrapper,
} from "../components";
import { Postrequest } from "../network";
export default function Home() {
  const data = useRef("");
  const navigation = useNavigate();
  const fetchrecord = async () => {
    try {
      if (data.current.length < 16) {
        toast.error("Please enter valid CNIC number", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      console.log(data.current.replace(/-/g, ""));
      const result: any = await Postrequest("findrecord", {
        cnic: data.current.replace(/-/g, ""),
      });
      if (result.status) navigation(`record/${JSON.stringify(result.data)}`);
      else
        toast.error(result.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
    } catch (error) {}
  };
  return (
    <Wrapper>
      <Box>
        <LogoWrapprt>
          <img
            src={require("../assets/logo.png")}
            alt="Logo "
            width={120}
            height={40}
          />
        </LogoWrapprt>
        <Field>
          <Label>CNIC</Label>

          <InputMask
            style={{
              borderRadius: " 4px",
              border: "1px solid #909090",
              marginTop: "10px",
              height: " 30px",
            }}
            mask="99999-99999999-9"
            maskChar={null}
            // value={props.value}
            onChange={(e) => (data.current = e.target.value)}
          >
            {/* {(inputProps: any) => (
              <MaterialInput {...inputProps} type="tel" disableUnderline />
            )} */}
          </InputMask>
        </Field>
        <Submitbutton onClick={fetchrecord}>Submit</Submitbutton>
      </Box>
    </Wrapper>
  );
}

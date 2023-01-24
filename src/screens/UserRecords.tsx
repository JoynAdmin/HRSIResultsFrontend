import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Field2,
  Value,
  Label,
  LogoWrapprt,
  Submitbutton,
  Wrapper,
  Field,
} from "../components";
import { Filepath } from "../constants";

export default function UserRecords(props: any) {
  let { data }: any = useParams();
  const [records, setRecords] = useState<any>({});
  useEffect(() => {
    setRecords(JSON.parse(data));
  }, []);
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
        <Field2>
          <Field>
            <Label>Employee ID</Label>
            <Value>{records.id}</Value>
          </Field>
          <Field>
            <Label>CNIC</Label>
            <Value>{records.cnic}</Value>
          </Field>
        </Field2>
        <Field2>
          <Field>
            <Label>Name</Label>
            <Value>{records.name}</Value>
          </Field>
          <Field>
            <Label>Level</Label>
            <Value>{records.level}</Value>
          </Field>
        </Field2>
        <Field2>
          <Field>
            <Label>Status</Label>
            <Value>{records.status}</Value>
          </Field>
        </Field2>

        <a
          download="prettierrc.js"
          target="_blank"
          href={`${Filepath}/prettierrc.js`}
          style={{ textDecoration: "none" }}
        >
          <Submitbutton>Download</Submitbutton>
        </a>
      </Box>
    </Wrapper>
  );
}

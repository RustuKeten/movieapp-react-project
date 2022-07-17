import {
  FormGroup,
  FormControl,
  Button,
  Input,
  InputLabel,
  FormHelperText,
  Link,
} from "@mui/material";

const Register= () => {
  return (
    <div className="d-flex m-auto">
      <div className="w-50">
        <img
          //   style={{ height: "600px" }}
          src="https://picsum.photos/900"
          alt=""
        />
      </div>
      <div className="login m-4 w-50 ">
        <h1 className="display-2 m-auto text-center">REGISTER</h1>
        <FormGroup className="m-auto p-4">
          <FormControl>
            <InputLabel htmlFor="name">First Name</InputLabel>
            <Input className="" id="name" type="text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="lastname">Last Name</InputLabel>
            <Input className="" id="last name" type="text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input className="" id="email" type="text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input className="" id="password" type="text" />
          </FormControl>

          <Button className="mt-4" variant="contained">
            Register
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Register;

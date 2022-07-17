import {
  FormGroup,
  FormControl,
  Button,
  Input,
  InputLabel,
  FormHelperText,
  Link,
} from "@mui/material";

const Login = () => {
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
        <h1 className="display-2 m-auto text-center">LOGIN</h1>
        <FormGroup className="m-auto p-4">
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              className=" "
              id="email"
            />
            <FormHelperText>
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              className=""
              id="my-input"
              type="password"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your Password.
            </FormHelperText>
          </FormControl>
          <Link href="#" underline="always">
            {"Forgot password?"}
          </Link>

          <Button className="mt-4" variant="contained">
            Login
          </Button>
          <Button className="bg-danger mt-2" variant="contained">
            Continue with Google
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Login;

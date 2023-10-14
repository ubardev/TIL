import { GoogleLogin } from "@react-oauth/google";

export default function Google() {
  return (
    <div style={{ display: "flex" }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          fetch(
            `/api/auth/get-token?credential=${credentialResponse.credential}`
          )
            .then((res) => res.json())
            .then((data) => console.log("data =========>", data));
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

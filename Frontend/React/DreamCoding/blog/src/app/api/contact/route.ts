import * as yup from "yup";
import { sendEmail } from "@/service/email";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: "메일 전송에 실패했습니다." }),
      { status: 400 }
    );
  }

  const { from, subject, message } = body;

  //Nodemailer를 이용해 메일 전송 로직 추가
  return sendEmail(body) //
    .then(
      () =>
        new Response(
          JSON.stringify({ message: "메일을 성공적으로 발송했습니다." }),
          { status: 200 }
        )
    ) //
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({ message: "메일 전송에 실패했습니다." }),
        { status: 500 }
      );
    });
}

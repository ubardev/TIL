package baekjoon.C_for;

import java.io.*;
import java.util.StringTokenizer;

public class C_08_11022_APlusBDash8 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int testCaseCount = Integer.parseInt(br.readLine());

        StringTokenizer st;

        for (int i=1; i<=testCaseCount; i++) {
            st = new StringTokenizer(br.readLine());
            int firstNumber = Integer.parseInt(st.nextToken());
            int secondNumber = Integer.parseInt(st.nextToken());

            bw.write("Case #" + i + ": " + firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber) + "\n");
        }

        br.close();
        bw.flush();
        bw.close();
    }
}

package baekjoon.C_for;

import java.io.*;

public class C_05_2741_prgintN {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int count = Integer.parseInt(br.readLine());
        br.close();

        for (int i=1; i<=count; i++) {
            bw.write(i + "\n");
        }

        bw.flush();
        bw.close();
    }
}

package baekjoon.C_for;

import java.io.*;
import java.util.StringTokenizer;

public class C_04_15552_quickSum {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int testCaseCount = Integer.parseInt(bufferedReader.readLine());

        StringTokenizer stringTokenizer;

        for (int i = 0; i < testCaseCount; i++) {
            stringTokenizer = new StringTokenizer(bufferedReader.readLine(), " ");
            bufferedWriter.write((Integer.parseInt(stringTokenizer.nextToken()) + Integer.parseInt(stringTokenizer.nextToken())) + "\n");
        }

        bufferedReader.close();
        bufferedWriter.flush();
        bufferedWriter.close();
    }
}

package baekjoon.C_for;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class C_11_10871_lessX {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int arrayCount = Integer.parseInt(st.nextToken());
        int targetNumber = Integer.parseInt(st.nextToken());

        int[] arrays = new int[arrayCount];
        st = new StringTokenizer(br.readLine());

        for (int i=0; i<arrayCount; i++) {
            arrays[i] = Integer.parseInt(st.nextToken());
        }
        br.close();

        StringBuilder sb = new StringBuilder();
        for (int i=0; i<arrayCount; i++) {
            if (arrays[i] < targetNumber) {
                sb.append(arrays[i] + " ");
            }
        }

        System.out.print(sb);
    }
}

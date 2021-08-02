package baekjoon.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class E_06_8958_ox {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            String value = st.nextToken();
            int score = 0;
            int sum = 0;

            for (int j = 0; j < value.length(); j++) {
                if (value.charAt(j) == 'O') {
                    score++;
                } else {
                    score = 0;
                }

                sum += score;
            }

            sb.append(sum).append("\n");
        }

        System.out.println(sb);
    }
}

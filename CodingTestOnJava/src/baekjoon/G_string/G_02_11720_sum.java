package baekjoon.G_string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class G_02_11720_sum {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());
        String number = br.readLine();

        int sum = 0;
        for (int i = 0; i < count; i++) {
            sum += number.charAt(i) - '0';
        }

        System.out.println(sum);
    }
}

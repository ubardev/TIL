package baekjoon.A_StepByStep.G_string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class G_03_10809_alphabat {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] arr = new int[26];

        Arrays.fill(arr, -1);

        String s = br.readLine();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (arr[ch - 'a'] == -1)
                arr[ch - 'a'] = i;
        }

        for (int val : arr) {
            System.out.print(val + " ");
        }
    }
}

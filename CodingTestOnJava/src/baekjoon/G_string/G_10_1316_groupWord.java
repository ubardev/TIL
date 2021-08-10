package baekjoon.G_string;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class G_10_1316_groupWord {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String[] args) throws IOException {
        int N = Integer.parseInt(br.readLine());
        int count = 0;

        for (int i = 0; i < N; i++) {
            if (isGroupWord(br.readLine())) {
                count++;
            }
        }

        System.out.println(count);
    }

    public static boolean isGroupWord(String word) {
        boolean[] array = new boolean[26];
        int prev = 0;

        for (int i = 0; i < word.length(); i++) {
            int now = word.charAt(i);

            if (now != prev) {

                if (array[now - 'a'] == false) {
                    array[now - 'a'] = true;
                    prev = now;
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}

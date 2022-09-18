package baekjoon.A_StepByStep.G_string;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class G_10_1316_groupWord {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int count = 0;

        for (int i = 0; i < N; i++) {
            if (isGroupWord(br.readLine()))
                count++;
        }

        System.out.println(count);
    }

    public static boolean isGroupWord(String word) {
        boolean[] charArray = new boolean[26];
        int prevChar = 0;

        for (int i = 0; i < word.length(); i++) {
            int currentChar = word.charAt(i);
            if (currentChar != prevChar) {
                if (!charArray[currentChar - 'a']) {
                    charArray[currentChar - 'a'] = true;
                    prevChar = currentChar;
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}

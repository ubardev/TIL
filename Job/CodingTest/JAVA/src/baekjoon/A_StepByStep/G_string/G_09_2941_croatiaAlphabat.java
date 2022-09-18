package baekjoon.A_StepByStep.G_string;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class G_09_2941_croatiaAlphabat {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String string = br.readLine();

        int stringLength = string.length();
        int count = 0;

        for (int i = 0; i < stringLength; i++) {
            char ch = string.charAt(i);

            if (ch == 'c' && (i + 1) < stringLength) {
                if (string.charAt(i + 1) == '=' || string.charAt(i + 1) == '-') {
                    i++;
                }
            }
            else if (ch == 'd' && (i + 1) < stringLength) {
                if (string.charAt(i + 1) == '-') {
                    i++;
                }
                else if (string.charAt(i + 1) == 'z' && (i + 2) < stringLength) {
                    if (string.charAt(i + 2) == '=') {
                        i += 2;
                    }
                }
            }
            else if (ch == 'l' && (i + 1) < stringLength) {
                if (string.charAt(i + 1) == 'j') {
                    i++;
                }
            }
            else if (ch == 'n' && (i + 1) < stringLength) {
                if (string.charAt(i + 1) == 'j') {
                    i++;
                }
            }
            else if (ch == 's' && (i + 1) < stringLength) {
                if (string.charAt(i + 1) == '=') {
                    i++;
                }
            }
            else if (ch == 'z' && (i + 1) < stringLength) {
                if (string.charAt(i + 1) == '=') {
                    i++;
                }
            }
            count++;
        }

        System.out.println(count);
    }
}

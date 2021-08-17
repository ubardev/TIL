package baekjoon.A_StepByStep.G_string;

import java.io.IOException;

public class G_08_5622_dial {
    public static void main(String[] args) throws IOException {
        int count = 0;
        int value;

        while(true) {
            value = System.in.read();

            if (value == '\n')
                break;

            if (value < 68) count += 3;
            else if (value < 71) count += 4;
            else if (value < 74) count += 5;
            else if (value < 77) count += 6;
            else if (value < 80) count += 7;
            else if (value < 84) count += 8;
            else if (value < 87) count += 9;
            else count += 10;
        }

        System.out.println(count);
    }
}

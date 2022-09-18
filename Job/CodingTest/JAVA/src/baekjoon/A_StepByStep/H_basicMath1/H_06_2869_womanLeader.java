package baekjoon.A_StepByStep.H_basicMath1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class H_06_2869_womanLeader {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int testCaseCount = Integer.parseInt(br.readLine());
        StringBuffer sb = new StringBuffer();

        for (int i = 0; i < testCaseCount; i++) {
            int floor = Integer.parseInt(br.readLine());
            int room = Integer.parseInt(br.readLine());

            sb.append(getPeopleCount(floor, room)).append("\n");
        }

        System.out.println(sb);
    }

    public static int getPeopleCount(int floor, int room) {
        if (floor == 0) return room;
        else if (room == 0) return 0;

        return getPeopleCount(floor, room - 1) + getPeopleCount(floor - 1, room);
    }
}

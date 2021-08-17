package baekjoon.A_StepByStep.H_basicMath1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class H_05_10250_ACMHotel {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int testCaseCount = Integer.parseInt(br.readLine());
        StringTokenizer st;

        for (int i = 0; i < testCaseCount; i++) {
            st = new StringTokenizer(br.readLine());
            getRoomInfo(st);
        }
    }

    public static void getRoomInfo(StringTokenizer data) {
        int height = Integer.parseInt(data.nextToken());
        int width = Integer.parseInt(data.nextToken());
        int N = Integer.parseInt(data.nextToken());

        int floor;
        int roomNumber;

        if (N % height == 0) {
            floor = height * 100;
            roomNumber = N / height;
        } else {
            floor = (N % height) * 100;
            roomNumber = (N / height) + 1;
        }
        System.out.println(floor + roomNumber);
    }
}

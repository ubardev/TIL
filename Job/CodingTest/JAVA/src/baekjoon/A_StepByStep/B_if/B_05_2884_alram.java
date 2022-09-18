package baekjoon.A_StepByStep.B_if;

import java.util.Scanner;

public class B_05_2884_alram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int DAY_MINUTE = 24 * 60;
        int hour = sc.nextInt();
        int minute = sc.nextInt();
        sc.close();

        int totalMinute = hour * 60 + minute;
        int calculatedAlarmMinute = totalMinute - 45;

        if (calculatedAlarmMinute < 0)
            calculatedAlarmMinute = DAY_MINUTE + calculatedAlarmMinute;

        int alarmHour = calculatedAlarmMinute / 60;
        int alarmMinute = calculatedAlarmMinute % 60;

        System.out.println(alarmHour + " " + alarmMinute);
    }
}

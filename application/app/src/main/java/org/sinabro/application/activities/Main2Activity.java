package org.sinabro.application.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import org.sinabro.application.R;
import org.sinabro.application.activities.RecruitActivity;

/**
 * Created by user on 2017-11-07.
 */

public class Main2Activity extends AppCompatActivity{

    Button projectBtn, contestBtn, studyBtn, clubBtn;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        projectBtn = (Button) findViewById(R.id.projectBtn);
        contestBtn =(Button) findViewById(R.id.contestBtn);
        studyBtn = (Button) findViewById(R.id.studyBtn);
        clubBtn = (Button) findViewById(R.id.clubBtn);

        contestBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Main2Activity.this, RecruitActivity.class);
                intent.putExtra("statusNum", 1);
                startActivity(intent);}
        });

        projectBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Main2Activity.this, RecruitActivity.class);
                intent.putExtra("statusNum", 2);
                startActivity(intent);}
        });

        clubBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Main2Activity.this, RecruitActivity.class);
                intent.putExtra("statusNum", 3);
                startActivity(intent);
            }
        });

        studyBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Main2Activity.this, RecruitActivity.class);
                intent.putExtra("statusNum", 4);
                startActivity(intent);
            }
        });
    }
}

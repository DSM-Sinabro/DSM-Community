package org.sinabro.application.dialogs;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import org.sinabro.application.R;
import org.sinabro.application.activities.RecruitActivity;

/**
 * Created by user on 2017-10-30.
 */

public class AddRecruitDialog extends AppCompatActivity {

    final static private int CONTEST_NUMBER = 1;
    final static private int PROJECT_NUMBER = 2;
    final static private int CLUB_NUMBER = 3;
    final static private  int STUDY_NUMBER = 4;

    private TextInputEditText title, memNum, position, contest_term, content;
    private String sTitle, sMemNum, sPosition, scontest_term, sContent;
    private Button dismissBtn;
    private TextView textView1;
    private View view1;
    private LinearLayout containerLink, containerTerm, containerMemNum, containerPosition, containerDueDate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.dialog_add_list);

        int recyclerNum = getIntent().getIntExtra("recyclerNum", -1);
        int statusNum = getIntent().getIntExtra("statusNum", 0);

        title = (TextInputEditText) findViewById(R.id.cTitle);
        memNum = (TextInputEditText) findViewById(R.id.cMemberNum);
        position = (TextInputEditText) findViewById(R.id.cPosition);
        contest_term = (TextInputEditText) findViewById(R.id.contestTerm);
        content = (TextInputEditText) findViewById(R.id.cContent);
        dismissBtn = (Button) findViewById(R.id.cDismissBtn);
        containerLink = (LinearLayout) findViewById(R.id.containerLink);
        containerTerm = (LinearLayout) findViewById(R.id.containerTerm);
        containerPosition = (LinearLayout) findViewById(R.id.containerPosition);
        containerMemNum = (LinearLayout) findViewById(R.id.containerMemNum);
        containerDueDate = (LinearLayout) findViewById(R.id.containterDudate);
        textView1 = (TextView) findViewById(R.id.text1);
        view1 = (View) findViewById(R.id.view1);

        if(recyclerNum == -1) {
            title.setText(sTitle);
            memNum.setText(sMemNum);
            position.setText(sPosition);
            contest_term.setText(scontest_term);
            content.setText(sContent);
        }

        switch (statusNum) {
            case CONTEST_NUMBER :
                containerTerm.setVisibility(View.VISIBLE);
                containerLink.setVisibility(View.VISIBLE);
                containerMemNum.setVisibility(View.VISIBLE);
                containerPosition.setVisibility(View.VISIBLE);
                break;

            case PROJECT_NUMBER :
                containerMemNum.setVisibility(View.VISIBLE);
                containerPosition.setVisibility(View.VISIBLE);
                containerDueDate.setVisibility(View.VISIBLE);
                break;

            case CLUB_NUMBER :
                view1.setVisibility(View.GONE);
                textView1.setVisibility(View.GONE);
                break;

            case STUDY_NUMBER :
                containerMemNum.setVisibility(View.VISIBLE);
                break;
            default:
                Toast.makeText(getApplicationContext(), "status number : 0", Toast.LENGTH_SHORT).show();
                break;
        }

        dismissBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AddRecruitDialog.this, RecruitActivity.class));
                finish();
            }
        });
    }
}

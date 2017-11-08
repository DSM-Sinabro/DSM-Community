package org.sinabro.application.dialogs;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;

import org.sinabro.application.R;
import org.sinabro.application.activities.RecruitActivity;

/**
 * Created by user on 2017-10-30.
 */

public class AddRecruitDialog extends AppCompatActivity {

    private TextInputEditText title, memNum, position, contest_term, content;
    private String sTitle, sMemNum, sPosition, scontest_term, sContent;
    private Button dismissBtn;
    private LinearLayout containerLink, containerTerm;

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

        containerTerm.setVisibility(View.VISIBLE);
        containerLink.setVisibility(View.VISIBLE);

        if(recyclerNum == -1) {
            title.setText(sTitle);
            memNum.setText(sMemNum);
            position.setText(sPosition);
            contest_term.setText(scontest_term);
            content.setText(sContent);
        }

        switch (statusNum) {
            case 1 :
            case 2 :
            case 3 :
            case 4 :
            default:
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

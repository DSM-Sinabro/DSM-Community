package org.sinabro.application.dialogs;

import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import org.sinabro.application.R;
import org.sinabro.application.activities.ContestActivity;

/**
 * Created by user on 2017-10-30.
 */

public class AddContestDialog extends AppCompatActivity {

    private TextInputEditText title, memNum, position, contest_term, content;
    private String sTitle, sMemNum, sPosition, scontest_term, sContent;
    private Button dismissBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.dialog_add_contest_list);

        int recyclerNum = getIntent().getIntExtra("recyclerNum", -1);

        title = (TextInputEditText) findViewById(R.id.cTitle);
        memNum = (TextInputEditText) findViewById(R.id.cMemberNum);
        position = (TextInputEditText) findViewById(R.id.cPosition);
        contest_term = (TextInputEditText) findViewById(R.id.contestTerm);
        content = (TextInputEditText) findViewById(R.id.cContent);
        dismissBtn = (Button) findViewById(R.id.cDismissBtn);

        if(recyclerNum == -1) {
            title.setText(sTitle);
            memNum.setText(sMemNum);
            position.setText(sPosition);
            contest_term.setText(scontest_term);
            content.setText(sContent);
        }

        dismissBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AddContestDialog.this, ContestActivity.class));
                finish();
            }
        });
    }
}

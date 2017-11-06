package org.sinabro.application.dialogs;

import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import org.sinabro.application.R;

/**
 * Created by user on 2017-10-30.
 */

public class AddProjectDialog extends AppCompatActivity {

    private TextInputEditText title, memNum, position, dueDate, content;
    private String sTitle, sMemNum, sPosition, sDueDate, sContent;
    private Button dismissBtn;
    private boolean gate; //edit : false, make : true


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.dialog_add_project_list);

        title = (TextInputEditText) findViewById(R.id.title);
        memNum = (TextInputEditText) findViewById(R.id.memberNum);
        position = (TextInputEditText) findViewById(R.id.position);
        dueDate = (TextInputEditText) findViewById(R.id.dueDate);
        content = (TextInputEditText) findViewById(R.id.content);
        dismissBtn = (Button) findViewById(R.id.dismissBtn);

        if(gate == false) {
            title.setText(sTitle);
            memNum.setText(sMemNum);
            position.setText(sPosition);
            dueDate.setText(sDueDate);
            content.setText(sContent);
        }


        dismissBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });
    }

}

package org.sinabro.application.dialogs;

import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
import android.view.View;
import android.widget.Button;

import org.sinabro.application.R;
import org.w3c.dom.Text;

/**
 * Created by user on 2017-10-30.
 */

public class AddProjectDialog extends Dialog {

    private TextInputEditText title, memNum, position, dueDate, content;
    private String sTitle, sMemNum, sPosition, sDueDate, sContent;
    private Button dismissBtn;
    private boolean gate; //edit : false, make : true

    public AddProjectDialog(@NonNull Context context) {
        super(context);

    }

    public AddProjectDialog(@NonNull Context context,
                            String sTitle,
                            String sMemNum,
                            String sPosition,
                            String sDueDate,
                            String sContent,
                            boolean gate) {
        super(context);
        this.sTitle = sTitle;
        this.sMemNum = sMemNum;
        this.sPosition = sPosition;
        this.sDueDate = sDueDate;
        this.sContent = sContent;
        this.gate = gate;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.dialog_add_list);

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

        postContent();

        dismissBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setsTitle(title.getText().toString());
                setsMemNum(memNum.getText().toString());
                setsPosition(position.getText().toString());
                setsDueDate(dueDate.getText().toString());
                setsContent(content.getText().toString());
                dismiss();
            }
        });
    }

    public void postContent() {

    }

    public String getsTitle() {
        return sTitle;
    }

    public void setsTitle(String sTitle) {
        this.sTitle = sTitle;
    }

    public void setsMemNum(String sMemNum) {
        this.sMemNum = sMemNum;
    }

    public void setsPosition(String sPosition) {
        this.sPosition = sPosition;
    }

    public void setsDueDate(String sDueDate) {
        this.sDueDate = sDueDate;
    }

    public void setsContent(String sContent) {
        this.sContent = sContent;
    }

    public String getsMemNum() {
        return sMemNum;
    }

    public String getsPosition() {
        return sPosition;
    }

    public String getsDueDate() {
        return sDueDate;
    }

    public String getsContent() {
        return sContent;
    }
}

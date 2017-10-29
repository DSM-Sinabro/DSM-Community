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

    public AddProjectDialog(@NonNull Context context) {
        super(context);

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

        sTitle = title.getText().toString();
        sMemNum = memNum.getText().toString();
        sPosition = position.getText().toString();
        sDueDate = dueDate.getText().toString();
        sContent = content.getText().toString();

        postContetn();

        dismissBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dismiss();
            }
        });
    }

    public void postContetn() {

    }

    public String getsTitle() {
        return sTitle;
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

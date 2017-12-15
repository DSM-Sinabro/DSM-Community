package org.sinabro.daemmunity.activities;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.adapter.CommentAdapter;

import java.util.ArrayList;


/**
 * Created by user on 2017-10-27.
 */

public class DetailActivity extends AppCompatActivity {

    final static private int CONTEST_NUMBER = 1;
    final static private int PROJECT_NUMBER = 2;
    final static private int CLUB_NUMBER = 3;
    final static private  int STUDY_NUMBER = 4;

    private ListView listView;
    private ArrayList<String> arrayList;
    private EditText commentEdit;
    private TextView titleText, cloneTest, positionText;
    private LinearLayout dueDate, link, projectTerm, memberNum;
    private int statusNum;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail_project);

        titleText = (TextView) findViewById(R.id.titleText);
        cloneTest = (TextView) findViewById(R.id.cloneText);
        positionText = (TextView) findViewById(R.id.detailPosition);

        statusNum = getIntent().getIntExtra("statusNum", 0);

        dueDate = (LinearLayout) findViewById(R.id.contestDueDate);
        link = (LinearLayout) findViewById(R.id.contestLink);
        memberNum = (LinearLayout) findViewById(R.id.memberNum);
        projectTerm = (LinearLayout) findViewById(R.id.projectTerm);

        //todo:switch로 바꾸기
        if (statusNum == CONTEST_NUMBER) {
            cloneTest.setVisibility(View.VISIBLE);
            positionText.setVisibility(View.VISIBLE);
            link.setVisibility(View.VISIBLE);
            dueDate.setVisibility(View.VISIBLE);

            titleText.setText("CONTEST");
            positionText.setText("android programmer");
        } else if (statusNum == PROJECT_NUMBER) {
            cloneTest.setVisibility(View.VISIBLE);
            positionText.setVisibility(View.VISIBLE);
            projectTerm.setVisibility(View.VISIBLE);

            titleText.setText("PROJECT");
            positionText.setText("android programmer");
        } else if (statusNum == CLUB_NUMBER) {
            titleText.setText("CLUB");
            memberNum.setVisibility(View.GONE);
        } else if (statusNum == STUDY_NUMBER) {
            titleText.setText("STUDY");
        } else {
            Toast.makeText(getApplicationContext(), "Intent not working", Toast.LENGTH_SHORT).show();
        }

        listView = (ListView) findViewById(R.id.commentListView);
        commentSetting();
    }

    private void commentSetting() {
        final CommentAdapter commentAdapter = new CommentAdapter();

        commentEdit = (EditText) findViewById(R.id.commentEditText);
        Button addBtn = (Button) findViewById(R.id.project_commentAddBtn);

        arrayList = new ArrayList<>();

        addBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String newComment = commentEdit.getText().toString();
                arrayList.add(newComment);
                commentAdapter.notifyDataSetChanged();
            }
        });

        for (int i = 0; i < 10; i++) {
            commentAdapter.addItem(ContextCompat.getDrawable(getApplicationContext(), R.drawable.profile_icon), "name " + i, "contents " + i, "date " + i);

        }

        listView.setAdapter(commentAdapter);
    }
}

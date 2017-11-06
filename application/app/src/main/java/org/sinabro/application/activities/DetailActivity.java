package org.sinabro.application.activities;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ListView;

import org.sinabro.application.R;
import org.sinabro.application.adapter.CommentAdapter;

import java.util.ArrayList;


/**
 * Created by user on 2017-10-27.
 */

public class DetailActivity extends AppCompatActivity {

    private ListView listView;
    private ArrayList<String> arrayList ;
    private EditText commentEdit;
    private LinearLayout dueDate, link;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail_project);

        dueDate = (LinearLayout) findViewById(R.id.contestDueDate);
        link = (LinearLayout) findViewById(R.id.contestLink);

        dueDate.setVisibility(View.VISIBLE);
        link.setVisibility(View.VISIBLE);

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

package org.sinabro.application.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import org.sinabro.application.R;
import org.sinabro.application.adapter.CommentAdapter;
import java.util.ArrayList;

/**
 * Created by parktaeim on 2017. 8. 11..
 */

public class FreeBoardDetailActivity extends AppCompatActivity{

    private ListView listView;
    private ArrayList<String> arrayList ;
    private EditText commentEdit;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_freeboard_detailpage);

        listView = (ListView) findViewById(R.id.commentListView);
        commentSetting();

        ImageView back_icon = (ImageView) findViewById(R.id.back_icon);
        back_icon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView titleTextView = (TextView) findViewById(R.id.titleTextView);
        TextView writerTextView = (TextView) findViewById(R.id.writerTextView);
        TextView dateTextView = (TextView) findViewById(R.id.dateTextView);
        TextView viewsTextView = (TextView) findViewById(R.id.viewsCountTextView);
        ImageView thumbnail = (ImageView) findViewById(R.id.thumbnail);

        Intent intent = getIntent();
        titleTextView.setText(intent.getStringExtra("title"));
        writerTextView.setText(intent.getStringExtra("writer"));
        dateTextView.setText(intent.getStringExtra("date"));
        viewsTextView.setText(intent.getStringExtra("views"));
    }


    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
            return true;

//            Intent intent = new Intent(FreeBoardDetailActivity.this, MainActivity.class);
//            startActivity(intent);
//            finish();
        }
        return super.onOptionsItemSelected(item);
    }


    private void commentSetting(){
        final CommentAdapter commentAdapter = new CommentAdapter();

        commentEdit=(EditText) findViewById(R.id.commentEditText);
        Button addBtn = (Button) findViewById(R.id.commentAddBtn);

        arrayList= new ArrayList<>();

        addBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String newComment = commentEdit.getText().toString();
                arrayList.add(newComment);
                commentAdapter.notifyDataSetChanged();
            }
        });
        for(int i=0;i<10;i++){
            commentAdapter.addItem(ContextCompat.getDrawable(getApplicationContext(),R.drawable.profile_icon),"name "+i, "contents "+i, "date "+i);

        }

        listView.setAdapter(commentAdapter);
    }
}

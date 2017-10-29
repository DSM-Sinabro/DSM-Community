package org.sinabro.application.activities;

import android.content.DialogInterface;
import android.media.Image;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.ImageButton;

import org.sinabro.application.R;
import org.sinabro.application.adapter.BillboardRecyclerAdapter;
import org.sinabro.application.dialogs.AddProjectDialog;
import org.sinabro.application.model.BillboardItem;

import java.util.ArrayList;

/**
 * Created by user on 2017-10-24.
 */

public class BillboardActivity extends AppCompatActivity {

    private RecyclerView recyclerView;
    private RecyclerView.Adapter adapter;
    private RecyclerView.LayoutManager manager;

    private ImageButton addBtn;

    private AddProjectDialog addDialog;

    private ArrayList<BillboardItem> items;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_billboard);

        recyclerView = (RecyclerView) findViewById(R.id.contestRecyclerView);
        recyclerView.hasFixedSize();
        manager = new LinearLayoutManager(getApplicationContext(), LinearLayoutManager.VERTICAL, false);
        manager.hasFocus();
        recyclerView.setLayoutManager(manager);

        getData();

        addDialog = new AddProjectDialog(BillboardActivity.this);

        addBtn = (ImageButton) findViewById(R.id.addList);

        addBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                addDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
                    @Override
                    public void onDismiss(DialogInterface dialog) {
                        items.add(new BillboardItem(addDialog.getsContent(),
                                addDialog.getsTitle(),
                                "username",
                                "today's date",
                                "0",
                                "picture",
                                addDialog.getsPosition()));

                        //todo : post to server, including details
                    }
                });

                addDialog.setOnShowListener(new DialogInterface.OnShowListener() {
                    @Override
                    public void onShow(DialogInterface dialog) {

                    }
                });
                addDialog.show();
            }
        });
    }

    public void getData() {
        items = new ArrayList<>();

        BillboardItem item1 = new BillboardItem(getResources().getString(R.string.long_text),
                "title",
                "user name",
                "date",
                "views",
                "https://kpopinfo114.files.wordpress.com/2016/07/hashswan-e1469337966671.jpg",
                "position");
        items.add(item1);
        BillboardItem item2 = new BillboardItem("dummy data",
                "title",
                "user name",
                "date",
                "views",
                "http://img.insight.co.kr/static/2017/08/05/700/irtc33cnqa6mz82a5b74.jpg",
                "position");
        items.add(item2);

        adapter = new BillboardRecyclerAdapter(items, getApplicationContext());
        recyclerView.setAdapter(adapter);
    }

}

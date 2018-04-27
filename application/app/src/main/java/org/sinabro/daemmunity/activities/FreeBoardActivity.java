package org.sinabro.daemmunity.activities;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import com.miguelcatalan.materialsearchview.MaterialSearchView;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.adapter.postListViewAdapter;
import org.sinabro.daemmunity.model.FreeBoardData;

public class FreeBoardActivity extends AppCompatActivity {

    private ListView mListView = null;
    private postListViewAdapter mAdapter = null;
    MaterialSearchView searchView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_freeboard);

        //툴바설정
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar_home);

        setSupportActionBar(toolbar);

        getSupportActionBar().setTitle("자유게시판");
        toolbar.setTitleTextColor(Color.WHITE);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        //검색
        searchView = (MaterialSearchView) findViewById(R.id.search_view);


        mListView = (ListView) findViewById(R.id.postsListView);

        mAdapter = new postListViewAdapter(this);
        mListView.setAdapter(mAdapter);

        // postsArrayList.add(new PostsData("오늘은 치킨이 먹고싶다","박태임","2017.08.15.","28",null));
        //이미지 있을때
        mAdapter.addItem("오늘 축제 꿀잼~~~", "박태임", "2017.08.07", "1", getResources().getDrawable(R.drawable.thumbnail, null));
        //이미지 null 일때
        mAdapter.addItem("오늘 축제 꿀잼~~~", "박태임", "2017.08.07", "18", null);


        //글 누르면 상세페이지로 넘어가기
        mListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long id) {
                FreeBoardData mData = mAdapter.mPostsListData.get(position);
                Intent intent = new Intent(getApplicationContext(), FreeBoardDetailActivity.class);

                intent.putExtra("title", mData.title);
                intent.putExtra("writer", mData.writer);
                intent.putExtra("date", mData.date);
                intent.putExtra("views", mData.views);

                startActivity(intent);
            }
        });


    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_freeboard_main, menu);

        MenuItem search_item = menu.findItem(R.id.search_icon);
        MenuItem writing_item = menu.findItem(R.id.writing_icon);

        searchView.setMenuItem(search_item);

        searchView.setOnQueryTextListener(new MaterialSearchView.OnQueryTextListener() {
            @Override
            //검색버튼이 눌리면
            public boolean onQueryTextSubmit(String query) {
                return false;
            }

            @Override
            //검색창에 글자를 쓰면 여기로 옴
            public boolean onQueryTextChange(String newText) {
                return false;
            }
        });

        searchView.setOnSearchViewListener(new MaterialSearchView.SearchViewListener() {
            @Override
            public void onSearchViewShown() {
            }

            @Override
            public void onSearchViewClosed() {
            }
        });
        return true;
    }




    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
            return true;
        }

        switch(item.getItemId()){
            case R.id.writing_icon:
                Intent intent = new Intent(FreeBoardActivity.this, FreeBoardPostingActivity.class);
                startActivity(intent);
                return true;

            default:
                return super.onOptionsItemSelected(item);
        }
    }
}

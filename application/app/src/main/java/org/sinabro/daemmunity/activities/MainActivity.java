package org.sinabro.daemmunity.activities;

import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v4.app.FragmentStatePagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.github.florent37.bubbletab.BubbleTab;
import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.adapter.MainPagerAdapter;
import org.sinabro.daemmunity.adapter.PostsAdapter;
import org.sinabro.daemmunity.fragments.Notice1Fragment;
import org.sinabro.daemmunity.fragments.Notice2Fragment;
import org.sinabro.daemmunity.fragments.Notice3Fragment;
import org.sinabro.daemmunity.model.Post;

import java.util.List;

public class MainActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private PostsAdapter adapter;
    private List<Post> postsList;
    private DrawerLayout drawerLayout;
    private ActionBarDrawerToggle actionBarDrawerToggle;
    private ViewPager vp;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        ViewPager viewPager = (ViewPager) findViewById(R.id.viewpager_main);
        viewPager.setAdapter(new MainPagerAdapter(getSupportFragmentManager()));

        BubbleTab tabLayout = (BubbleTab) findViewById(R.id.bubbleTab);
        tabLayout.setupWithViewPager(viewPager);
  /*      for (int index = 0; index < 4; index++) {
            tabLayout.getTabAt(index).setIcon(MainPagerAdapter.mIconResIds[index]);
            tabLayout.getTabAt(index).setText(MainPagerAdapter.mText[index]);
        }*/
       /* Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);

        drawerLayout = (DrawerLayout) findViewById(R.id.drawerLayout);
        actionBarDrawerToggle = new ActionBarDrawerToggle(this, drawerLayout, toolbar, R.string.app_name, R.string.app_name) {


            @Override
            public void onDrawerOpened(View drawerView) {
                super.onDrawerOpened(drawerView);
            }

            @Override
            public void onDrawerClosed(View drawerView) {
                super.onDrawerClosed(drawerView);
            }
        };
        drawerLayout.setDrawerListener(actionBarDrawerToggle);
        actionBarDrawerToggle.syncState();


        initCollapsingToolbar();

        recyclerView = (RecyclerView) findViewById(R.id.recycler_view);

        postsList = new ArrayList<>();
        adapter = new PostsAdapter(this, postsList);

        RecyclerView.LayoutManager layoutManager = new GridLayoutManager(this,2);
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.addItemDecoration(new GridSpacingItemDecoration(2,dpToPx(10),true));
        recyclerView.setItemAnimator(new DefaultItemAnimator());
        recyclerView.setAdapter(adapter);



        preparePosts();


        try{
            //Glide.with(this).load(R.drawable.image6).into((ImageView)findViewById(R.id.backdrop));
        }catch (Exception e){
            e.printStackTrace();
        }

*/








        vp = (ViewPager)findViewById(R.id.vp);
        Button btn_notice1 = (Button)findViewById(R.id.btn_notice1);
        Button btn_notice2 = (Button)findViewById(R.id.btn_notice2);
        Button btn_notice3 = (Button)findViewById(R.id.btn_notice3);



        View.OnClickListener movePageListener = new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
            {
                int tag = (int) v.getTag();
                vp.setCurrentItem(tag);
            }
        };

        class pagerAdapter extends FragmentStatePagerAdapter
        {
            public pagerAdapter(android.support.v4.app.FragmentManager fm)
            {
                super(fm);
            }
            @Override
            public android.support.v4.app.Fragment getItem(int position)
            {
                switch(position)
                {
                    case 0:
                        return new Notice1Fragment();
                    case 1:
                        return new Notice2Fragment();
                    case 2:
                        return new Notice3Fragment();
                    default:
                        return null;
                }
            }
            @Override
            public int getCount()
            {
                return 3;
            }
        }

        vp.setAdapter(new pagerAdapter(getSupportFragmentManager()));
        vp.setCurrentItem(0);

        btn_notice1.setOnClickListener(movePageListener);
        btn_notice1.setTag(0);
        btn_notice2.setOnClickListener(movePageListener);
        btn_notice2.setTag(1);
        btn_notice3.setOnClickListener(movePageListener);
        btn_notice3.setTag(2);

    }

    @Override
    public void onBackPressed() {
        Toast.makeText(this, "Back button pressed.", Toast.LENGTH_SHORT).show();
        new AlertDialog.Builder(this)
                .setTitle("종료")
                .setMessage("Dammuity를 종료 하실겁니까??")
                .setPositiveButton("예", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int whichButton) {
                        android.os.Process.killProcess(android.os.Process.myPid());
                    }
                })
                .setNegativeButton("아니요", null).show();
    }
}

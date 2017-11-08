package org.sinabro.application.adapter;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.bumptech.glide.Glide;

import org.sinabro.application.R;
import org.sinabro.application.activities.FreeBoardActivity;
import org.sinabro.application.activities.ProjectAndStudyActivity;
import org.sinabro.application.model.Post;

import java.util.List;

/**
 * Created by parktaeim on 2017. 7. 30..
 */

public class PostsAdapter extends RecyclerView.Adapter<PostsAdapter.MyViewHolder> {

    private Context mContext;
    private List<Post> postList;

    public class MyViewHolder extends RecyclerView.ViewHolder {
        ImageView image;

        public MyViewHolder(View view) {
            super(view);

            image = (ImageView) view.findViewById(R.id.image);
        }

    }

    public PostsAdapter(Context mContext, List<Post> postList) {
        this.mContext = mContext;
        this.postList = postList;
    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.posts_card, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, final int position) {
        Post post = postList.get(position);
        Glide.with(mContext).load(post.getImage()).into(holder.image);

        holder.image.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (position==0){
                    Intent intent=new Intent(mContext.getApplicationContext(), ProjectAndStudyActivity.class);
                    mContext.startActivity(intent);
                }
                else if (position==2){
                    Intent intent=new Intent(mContext.getApplicationContext(), FreeBoardActivity.class);
                    mContext.startActivity(intent);
                }
            }
        });
    }

    @Override
    public int getItemCount() {
        return postList == null ? 0:postList.size();
    }
}

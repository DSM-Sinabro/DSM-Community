package org.sinabro.application.adapter;

import android.content.Context;
import android.graphics.Bitmap;
import android.media.Image;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.bumptech.glide.RequestManager;

import org.sinabro.application.R;

import java.util.ArrayList;

/**
 * Created by parktaeim on 2017. 11. 8..
 */

public class PostingImageAdapter extends RecyclerView.Adapter<PostingImageAdapter.ViewHolder> {
    private Context context;
    private ArrayList<Bitmap> items = new ArrayList<>();
    private RequestManager requestManager;

    public PostingImageAdapter(){

    }

    public PostingImageAdapter(Context context, ArrayList<Bitmap> items) {
        this.context = context;
        this.items = items;
    }

    @Override
    public PostingImageAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_posting_img,parent,false);
        ViewHolder vh = new ViewHolder(view);
        return vh;
    }

    @Override
    public void onBindViewHolder(PostingImageAdapter.ViewHolder holder, final int position) {
        holder.image.setImageBitmap(items.get(position));
        holder.deleteImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d("delete Button ===","OnClick!!");
                deleteAtPosition(position);
                Log.d("delete Button ===","position:"+position);

            }
        });
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{
        ImageView image;
        ImageView deleteImage;

        public ViewHolder(View itemView) {
            super(itemView);
            image = (ImageView) itemView.findViewById(R.id.posting_image);
            deleteImage = (ImageView) itemView.findViewById(R.id.img_delete_btn);
        }
    }

//    public void addAtPosition(int position, Bitmap picture){
//        if(position > items.size()){
//            position = items.size();
//        }
//        items.add(position, picture);
//        notifyItemInserted(position);
//    }

    public void deleteAtPosition(int position){
        if(position < items.size()){
            items.remove(position);
            notifyItemRemoved(position);
            notifyDataSetChanged();
        }
    }

}

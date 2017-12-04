package org.sinabro.application.adapter;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import org.sinabro.application.R;
import org.sinabro.application.model.CommentItem;

import java.util.ArrayList;

/**
 * Created by parktaeim on 2017. 8. 14..
 */

public class CommentAdapter extends BaseAdapter{
    private ArrayList<CommentItem> commentItems = new ArrayList<>();

    @Override
    public int getCount() {
        return commentItems.size();
    }

    @Override
    public Object getItem(int position) {
        return commentItems.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View view, ViewGroup viewGroup) {
        Context context = viewGroup.getContext();

        if(view == null){
            LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            view = inflater.inflate(R.layout.comment,viewGroup,false);
        }


        ImageView profile_img = (ImageView) view.findViewById(R.id.profile_img);
        TextView writer = (TextView) view.findViewById(R.id.writerTextView);
        TextView comment = (TextView) view.findViewById(R.id.commentTextView);
        TextView date = (TextView) view.findViewById(R.id.dateTextView);

        CommentItem item = commentItems.get(position);

        profile_img.setImageDrawable(item.getProfile());
        writer.setText(item.getWriter());
        comment.setText(item.getComment());
        date.setText(item.getDate());

        return view;
    }

    public void addItem(Drawable img , String writer, String comment, String date){
        CommentItem commentItem = new CommentItem();

        commentItem.setProfile(img);
        commentItem.setWriter(writer);
        commentItem.setComment(comment);
        commentItem.setDate(date);

        commentItems.add(commentItem);

    }
}



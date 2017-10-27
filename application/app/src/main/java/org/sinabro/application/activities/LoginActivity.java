package org.sinabro.application.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import org.sinabro.application.R;
import org.sinabro.application.connection.HttpConnection;
import org.sinabro.application.connection.Service;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class LoginActivity extends AppCompatActivity {

    private Button loginButton;
    private EditText idEditText,passwordEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        idEditText=(EditText)findViewById(R.id.id);
        passwordEditText=(EditText)findViewById(R.id.password);

        String id=idEditText.getText().toString();
        String password=passwordEditText.getText().toString();

        loginButton = (Button) findViewById(R.id.loginButton);
        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(LoginActivity.this,MainActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }

    public void login(String id, String password) {

        Service service = HttpConnection.getInstance();
        service.login(id, password).enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(Service.HTTP_SUCCESS==response.code()){
                /*    SweetAlertDialog sd=new SweetAlertDialog(getApplicationContext(),SweetAlertDialog.SUCCESS_TYPE);
                    sd.setCancelable(true);
                    sd.setCancelText("You clicked the button").show();*/
                }else{
                    //failed
                }
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {

            }
        });


    }


}

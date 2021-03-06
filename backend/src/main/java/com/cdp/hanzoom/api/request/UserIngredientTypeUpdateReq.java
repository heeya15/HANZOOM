package com.cdp.hanzoom.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

/**
 * 유저 식재료 API ([POST] /api/userIngredient) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@ApiModel("UserIngredientTypeUpdateRequest")
public class UserIngredientTypeUpdateReq {
    @ApiModelProperty(name="유저 식재료 No", example="1")
    private Long userIngredientNo;

    @ApiModelProperty(name="식재료 Name", example="건빵")
    private String ingredientName;

    @ApiModelProperty(name="종류", example="일반")
    private String type;

    @ApiModelProperty(name="식재료 구매일", example="2022-01-01")
    private String purchaseDate;

    @ApiModelProperty(name="식재료 유통기한", example="2022-01-01")
    private String expirationDate;
}

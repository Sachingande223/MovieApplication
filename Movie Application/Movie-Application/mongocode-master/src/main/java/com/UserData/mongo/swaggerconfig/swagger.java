package com.UserData.mongo.swaggerconfig;

import com.google.common.base.Predicate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static com.google.common.base.Predicates.or;
import static springfox.documentation.builders.PathSelectors.regex;

// It is used to enable methods in swagger
@EnableSwagger2
@Configuration
public class swagger {
    @Bean
    public Docket postApi(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("swagger-api")
                .apiInfo(apiInfo()).select().paths(postPaths()).build();
    }
    private Predicate<String> postPaths(){
        return or(regex("/Movie.*"),regex("/getFavorite.*"),regex("/deleteFavorite.*"));
    }
    private ApiInfo apiInfo()
    {
        return new ApiInfoBuilder().title("my favorite service")
                .description("using swagger api").termsOfServiceUrl("http://myapp.com")
                .contact("Team StarBuff").license("app licence").build();
    }
}


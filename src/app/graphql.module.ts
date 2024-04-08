import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, ApolloModule, HttpClientModule],
    providers: [
      {
        provide: APOLLO_OPTIONS,
        useFactory: (httpLink: HttpLink) => {
          return {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://one01308759-comp3133-assignment1-o7v4.onrender.com/graphql',
            }),
          };
        },
        deps: [HttpLink],
      },
    ],
  })

export class GraphQLModule {}

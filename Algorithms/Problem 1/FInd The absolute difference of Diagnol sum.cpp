#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
        int n;
    cin>>n;
   // int **p = new int*[n];
    //for(int i = 0 ; i< n ; i++)
     //   p[i]= new int[n];
    int sum1=0; 
    int sum2=0;
    int x;
    for(int i = 0 ; i< n ; i++)
        for(int k = 0 ; k< n ; k++)
    {
        cin>>x ;
        if(i==k)
            sum1 += x;
        if(i+k == n-1)
            sum2 += x;
    }
    int d = sum1-sum2;
    if(d<0)
        d*=-1;
    cout<<d;
    return 0;
}
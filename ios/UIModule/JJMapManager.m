//
//  JJMapManager.m
//  ReactNativeApp
//
//  Created by 林嘉健 on 2017/7/21.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "JJMapManager.h"

#import <MapKit/MapKit.h>

//  转换方法
@implementation RCTConvert(CoreLocation)

RCT_CONVERTER(CLLocationDegrees, CLLocationDegrees, doubleValue);
RCT_CONVERTER(CLLocationDistance, CLLocationDistance, doubleValue);

+ (CLLocationCoordinate2D)CLLocationCoordinate2D:(id)json
{
  json = [self NSDictionary:json];
  return (CLLocationCoordinate2D){
    [self CLLocationDegrees:json[@"latitude"]],
    [self CLLocationDegrees:json[@"longitude"]]
  };
}

@end

@implementation RCTConvert(MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json
{
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json
{
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}
@end

// JJMapManager
@interface JJMapManager ()
// 默认地点
@property (nonatomic, assign) MKCoordinateRegion region;
@property (nonatomic, retain) MKMapView *mapView;
@property (nonatomic, copy) RCTBubblingEventBlock onChange;
@end

@implementation JJMapManager

RCT_EXPORT_MODULE()

-(UIView *) view {
  self.mapView = [[MKMapView alloc] init];
  self.region = (MKCoordinateRegion) {
    (CLLocationCoordinate2D) {
      20,  // latitude
      113   //longitude
    },
    (MKCoordinateSpan) {
      1.2,  // latitudeDelta
      1.2   // longitudeDelta
    }
  };
  return self.mapView;
}

- (void)setRegion:(MKCoordinateRegion)region animated: (BOOL)ani {
  [self.mapView setRegion:region animated:ani];
}

RCT_EXPORT_VIEW_PROPERTY(pitchEnable, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, JJMapManager) {
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
//  [view setRegion: [RCTConvert MKCoordinateRegion:json] animated:YES];

}

@end



